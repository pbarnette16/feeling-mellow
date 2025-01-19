import { colors } from './colors'

export interface CardVariantsProps {
    name: string,
    blurb: string,
    time: string,
    color: string,
    id: number,
}

const CardVariants: CardVariantsProps[] = [
    {
        name: 'Shifting focus',
        blurb: 'Break the loop by shifting focus',
        time: '5 mins',
        color: colors.Classification['orange'].value,
        id:867
    },
    {
        name: 'Taking action',
        blurb: 'Create focus through action',
        time: '9 mins',
        color: colors.Classification['purple'].value,
        id: 5309
    },
    {
        name: 'Worry time',
        blurb: 'Contain your worries',
        time: '5 mins',
        color: colors.Classification['blue'].value,
        id: 42
    },
    {
        name: 'Changing perspectives',
        blurb: 'Reframe your thoughts',
        time: '4 mins',
        color: colors.Classification['green'].value,
        id: 8
    },
    {
        name: 'Changing perspectives 2',
        blurb: 'Reframe your thoughts this is a long blurb to see how it wraps',
        time: '4 mins',
        color: colors.Classification['blue'].value,
        id: 16
    }

];

export default CardVariants;