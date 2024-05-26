export default function Button(props: { text: string; link: string }) {
  const text = props.text;
  const link = props.link;

  return (
    <button
      class="bg-black text-white text-lg w-44 px-6 py-2 rounded-full hover:w-64 duration-300 mt-3"
      onClick={() => location.assign(link)}
    >
      {text}
    </button>
  );
}
