import './Content.css'
import Sidebar from './Sidebar/Sidebar';
import Page from './Page/Page';

const Content = () => {
    return (
        <div className="content">
            <Sidebar />
            <Page />
        </div>
    )
}

export default Content;