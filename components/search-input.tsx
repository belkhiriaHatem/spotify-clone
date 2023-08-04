"use client";

import useDebounce from "@/hooks/useDebounce";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import qs from "query-string";

import Input from "./input";

type Props = {};

export default function SearchInput({}: Props) {
  const router = useRouter();
  const [value, setvalue] = useState<string>("");
  const deboucedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: deboucedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [deboucedValue, router]);

  return (
    <Input
      placeholder="What do you wanna listen to?"
      value={value}
      onChange={(e) => setvalue(e.target.value)}
    />
  );
}
