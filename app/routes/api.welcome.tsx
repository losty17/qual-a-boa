export function action(args: any) {
  console.log("Welcome action called with args:", args);
  return null;
}

export default function Welcome() {
  return <h1>Welcome to the Welcome Page!</h1>;
}
