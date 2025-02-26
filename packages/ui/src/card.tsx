import { storyblokEditable } from "@storyblok/react/rsc";

export const CardComponent = (props: any) => {
  return (
    <div
      {...storyblokEditable(props.blok)}
      className="bg-white p-8 rounded-sm shadow"
    >
      <h3 className="font-bold text-3xl">{props.blok.headline}</h3>
      <p className="mt-6 text-lg">{props.blok.content}</p>
    </div>
  );
};
