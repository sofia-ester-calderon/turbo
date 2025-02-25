import { storyblokEditable } from "@storyblok/react/rsc";
import { CardComponent } from "@repo/ui/card";

export const Card = (params: any) => {
  console.log("Card", params)
  return (
    <div {...storyblokEditable(params.blok)}>
      <CardComponent params={params} />
    </div>

  );
};
