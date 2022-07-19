import Restaurant from './Restaurant';

const Page = () => {
    let restoNumber = 2;

    if(restoNumber == 0) {
        return (
            <div className="page">
                <p>Select a Restaurant to see its details.</p>
            </div>
        )
    }
    else {
        return (
            <Restaurant id={restoNumber} />
        );
    }
}

export default Page;