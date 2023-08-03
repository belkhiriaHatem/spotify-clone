"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/auth-modal";
import UploadModal from "@/components/upload-modal";

type Props = {};

export default function ModalProvider({}: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
}
