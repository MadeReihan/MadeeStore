import { Meta } from "@storybook/react";
import Input from "../../../../components/atoms/input";
import { InputProps } from '../../../../components/atoms/input/index';

export default{
    title: 'Components/Atom/Input',
    component: Input,

}as Meta;

const Template = (args:InputProps) => <Input {...args} />

export const Default = Template.bind({});
Default.args = {
    label: 'Nama Lengkap',
    idname:'name',
    type:'text'
};