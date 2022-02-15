import {
    ServicesCard,
    ServicesH2,
    ServicesIcon,
    LinkP
} from './SCelements';

const MatsCard = ({
    id,
    name,
    image
}) => {
    return (
        <>
            <ServicesCard>
                <ServicesIcon src={image} />
                <ServicesH2>{name}</ServicesH2>
                <LinkP to={`/shop/details/mats/${id}`}>Details</LinkP>
            </ServicesCard>
        </>
    )
}

export default MatsCard;