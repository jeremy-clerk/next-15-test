"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ErrorAlert from "@/components/error";
import { cn } from "@/lib/utils";

export interface UserFormProps {
  firstName: string;
  lastName: string;
  email: string;
  onSubmit?: () => void;
}

export default function UserForm({
  firstName,
  lastName,
  email,
  onSubmit,
}: UserFormProps) {
  const [userData, setUserData] = useState({
    firstName,
    lastName,
  });

  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/user/update", {
      method: "POST",
      body: JSON.stringify(userData),
    }).catch((e) => {
      console.error(e);
      setError(e);
      return null;
    });

    const newUser = await res?.json();

    if (newUser.id) {
      setLoading(false);
      if (onSubmit) onSubmit();
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-4", loading && "animate-pulse")}
      onSubmit={submit}
    >
      {error && (
        <ErrorAlert title={"Error"} description={"Error updating user."} />
      )}
      <div>
        <Label>First Name</Label>
        <Input
          value={userData.firstName}
          onChange={handleChange}
          name={"firstName"}
          autoComplete={"negative"}
          data-1p-ignore={"true"}
        />
      </div>
      <div>
        <Label>Last Name</Label>
        <Input
          value={userData.lastName}
          onChange={handleChange}
          name={"lastName"}
          autoComplete={"negative"}
          data-1p-ignore={"true"}
        />
      </div>
      <div>
        <Label>Email</Label>
        <Input value={email} readOnly={true} disabled={true} />
      </div>
      <div className={"flex justify-end"}>
        <Button type={"submit"}>Submit</Button>
      </div>
    </form>
  );
}
