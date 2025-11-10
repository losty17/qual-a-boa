import type { Route } from "./+types/_index";
import { Welcome } from "../welcome/welcome";
import { useSubmit } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const submit = useSubmit();

  const onClick = () =>
    submit(
      { teste: true },
      {
        action: "/api/welcome",
        method: "POST",
        navigate: false,
        fetcherKey: "welcomeSubmitter",
        replace: true,
        preventScrollReset: true,
      },
    );

  return (
    <>
      <Welcome />
      <button onClick={onClick}>Go to Welcome via submit</button>
    </>
  );
}
