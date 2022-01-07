import { Meta } from "@storybook/react";
import StepItem,{StepItemProps} from "../../../../components/molecules/StepItem";

export default{
    title: 'Components/molecules/StepItem',
    component: StepItem,

}as Meta;

const Template = (args:StepItemProps) => <StepItem {...args} />

export const Default = Template.bind({});
Default.args = {
    judul: '1.start',
    kalimat_atas: 'pilih salah satu game',
    kalimat_bawah:'yang ingin kamu top up',
};