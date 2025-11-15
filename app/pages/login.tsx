import { Form, redirect } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import type { Route } from "./+types/login";
import { auth } from "~/lib/auth.server";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const step = formData.get("step");
  const email = formData.get("email");
  const otp = formData.get("otp");

  if (step === "email") {
    await auth.api.sendVerificationOTP({
      body: {
        email: email as string,
        type: "sign-in",
      },
    });

    return { step: "otp", email };
  }

  const result = await auth.api.signInEmailOTP({
    returnHeaders: true,
    body: {
      email: email as string,
      otp: otp as string,
    },
  });

  console.log("Login result:", result);

  return redirect("/", { headers: result.headers });
}

export default function Login({ actionData }: Route.ComponentProps) {
  const step = actionData?.step ?? "email";
  const email = typeof actionData?.email === "string" ? actionData.email : "";

  return (
    <Form method="post">
      <Input type="hidden" name="step" value={step} />
      email
      <Input
        type={step === "otp" ? "hidden" : "text"}
        name="email"
        placeholder="email"
        defaultValue={email}
      />
      {step === "otp" && (
        <>
          otp
          <Input name="otp" placeholder="otp" />
        </>
      )}
      <Button type="submit">Submit</Button>
    </Form>
  );
}
