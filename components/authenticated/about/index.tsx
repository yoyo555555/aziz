"use client";
import useCompany from "@/components/hooks/useCompany";
import useTheme from "@/components/hooks/useTheme";
import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useState } from "react";


const MonComposant = () => {
  const { mode } = useTheme();
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const userId = (session?.user as { id: string })?.id;
  const { company } = useCompany();
  const primaryColor = company?.color.primary;
  const primaryLightColor = company?.color.primaryLight;
  const primaryVeryLightColor = company?.color.primaryVeryLight;

  
 

  return (
    <>
     <div>
24 |       <a href="https://ibb.co/drxm7xM"><img src="https://i.ibb.co/nbtPRtm/1.jpg" alt="1" /></a>
25 |       <a href="https://ibb.co/0rYxJCQ"><img src="https://i.ibb.co/sqsZ3Kt/2.jpg" alt="2" /></a>
26 |       <a href="https://ibb.co/s3BNGQ0"><img src="https://i.ibb.co/ys3Z15w/3.jpg" alt="3" /></a>
27 |     </div>

    </>
  );
};
export default MonComposant;



