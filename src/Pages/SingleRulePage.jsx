import {rules} from '../rules'
import Header from '../components/elements/Header';
import {useParams, useNavigate} from 'react-router-dom'
import './singleRulePage.scss'
import BackButton from '../components/ui/BackButton';
import Footer from '../components/elements/Footer';


function SingleRule () {

    const navigate = useNavigate ()
    const params = useParams () 
    const id = params.id
    let rule = rules.find((rule)=>rule.id === id)
    return (
        <div className="SingleRulePage">
            <div className="container">
                <Header>
                    <BackButton
                        handleClick={()=>navigate(-1)}/>
                </Header>
                <h1 className="SingleRulePage__title">{rule.title}</h1>
                <p className="SingleRulePage__description">{rule.description}</p>
                <Footer/>
            </div>
        </div>
        );



}

export default SingleRule