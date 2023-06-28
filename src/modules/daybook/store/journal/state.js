import { Date } from "core-js";


export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text:'Cupidatat aliquip culpa aute nostrud consequat qui. Exercitation do quis nisi consequat nostrud. Ex elit aliqua adipisicing minim dolore culpa id magna occaecat reprehenderit officia deserunt.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text:'Adipisicing esse et culpa id nisi cupidatat cupidatat est dolor. Deserunt ea deserunt nulla eu in consequat labore. Et laborum aliquip nisi laborum incididunt proident ad. Eu laboris dolore aliquip et proident labore veniam Lorem excepteur. Nulla excepteur occaecat dolor eiusmod magna duis commodo labore laborum enim nulla. Sunt enim commodo voluptate veniam nostrud aliquip laborum aliquip officia pariatur. Laboris commodo reprehenderit sunt sint consequat aliquip.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text:'Ipsum proident commodo non labore in sint exercitation laborum ea amet irure. Adipisicing eiusmod est eiusmod culpa cupidatat velit ea tempor. Tempor anim et occaecat duis aliqua dolor sit dolor aliquip. Nostrud nulla occaecat culpa in incididunt veniam anim eu cupidatat quis labore velit. Nostrud magna culpa exercitation tempor ex elit consectetur. Fugiat aute aute incididunt aute ad.',
            picture: null,
        }
    ]
})