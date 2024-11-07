import {Html,Button} from '@react-email/components'
export function Email(p){
    const {url}=p;
    return (
        <Html lang='en'>
         <Button href={url}>Click me</Button>
        </Html>
    )
}