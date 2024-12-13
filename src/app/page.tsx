export default function Home() {
  const date = new Date();

  return (
    <div>
      Hello World!!! <code>{date.toDateString()}</code>
    </div>
  );
}
