import { Meta } from "@storybook/react";
import PieceFeaturedGame,{GambarGame} from "../../../../components/molecules/PieceFeaturedGame";

export default{
    title: 'Components/molecules/PieceFeaturedGame',
    component: PieceFeaturedGame,

}as Meta;

const Template = (args:GambarGame) => <PieceFeaturedGame {...args} />

export const Default = Template.bind({});
Default.args = {
    divisi: 'mobile',
    title: 'super mech',
};