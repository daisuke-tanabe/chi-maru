import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { BaseButton } from "./BaseButton";

export default { component: BaseButton } as ComponentMeta<typeof BaseButton>;

export const Index: ComponentStoryObj<typeof BaseButton> = {
  args: {
    label: "ボタン",
  },
};
