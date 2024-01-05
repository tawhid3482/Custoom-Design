import Card from './Card';
import Card2 from './Card2';

const AllCard = () => {
    return (
        <div className='p-8'>
            <Card></Card>
            <br />
            <p className='text-3xl font-bold'>text-center card</p>
            <Card2></Card2>
        </div>
    );
};

export default AllCard;