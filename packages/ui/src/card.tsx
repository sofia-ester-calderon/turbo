export const CardComponent = (props: any) => {
  console.log("CardComp", props.params.blok.headline)
  return (
    <div
      className="bg-white p-8 rounded-sm shadow"
    >
      <h3 className="font-bold text-3xl">{props.params.blok.headline}</h3>
      <p className="mt-6 text-lg">{props.params.blok.content}</p>
    </div>
  );
};
