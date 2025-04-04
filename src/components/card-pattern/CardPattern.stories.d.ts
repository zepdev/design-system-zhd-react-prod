import { StoryObj } from '@storybook/react';
import { CardPatternProps } from './CardPattern.interface';

declare const meta: {
    title: string;
    component: import('react').FC<CardPatternProps>;
    tags: string[];
    argTypes: {
        items: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithHeadline: Story;
export declare const With3Items: Story;
export declare const With4Items: Story;
export declare const With5Items: Story;
export declare const With6Items: Story;
export declare const With7Items: Story;
export declare const With8Items: Story;
export declare const With9Items: Story;
export declare const With10Items: Story;
export declare const With11Items: Story;
export declare const With12Items: Story;
//# sourceMappingURL=CardPattern.stories.d.ts.map