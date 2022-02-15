import {
    ServicesCard,
    ServicesH2,
    ServicesIcon,
    LinkP
} from './SCelements';

const GymCard = ({
    id,
    name,
    image
}) => {
    return (
        <>
            <ServicesCard>
                <ServicesIcon src={image} />
                <ServicesH2>{name}</ServicesH2>
                <LinkP to={`/shop/details/gym/${id}`}>Details</LinkP>
            </ServicesCard>
        </>
    )
}

export default GymCard;