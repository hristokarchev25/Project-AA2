import {
    ServicesCard,
    ServicesH2,
    ServicesIcon,
    LinkP
} from './SCelements';


const ServiceCard = ({
    id,
    name,
    image
}) => {
    return (
        <>
            <ServicesCard>
                <ServicesIcon src={image} />
                <ServicesH2>{name}</ServicesH2>
                <LinkP to={`/shop/details/${id}`}>Details</LinkP>
            </ServicesCard>
        </>
    )
}

export default ServiceCard;