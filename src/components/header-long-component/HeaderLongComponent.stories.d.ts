import { StoryObj } from '@storybook/react';
import { HeaderLongComponentProps } from '../header-long-component';

declare const meta: {
    title: string;
    component: import('react').FC<HeaderLongComponentProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithPrimaryButton: Story;
//# sourceMappingURL=HeaderLongComponent.stories.d.ts.map