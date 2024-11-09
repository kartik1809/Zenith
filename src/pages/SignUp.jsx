import React,{useState} from 'react';
import MultiStepProgressBar from '../components/Signup/MultiStepProgressBar';
import UserCred from '../components/Signup/UserCred';
import PersonalInfo from '../components/Signup/PersonalInfo';
import UserGoal from '../components/Signup/UserGoal';
import ExtDown from '../components/Signup/ExtDown';

const SignUp = () => {
    const [page, setPage] = useState("pageone");

    const nextPage = (page) => {
        setPage(page);
    };

    const [userData,setUserData] = useState({
        email: "",
        password: "",
        username: "",
        Name: "",
        location: "",
        age: "",
        Occupation: "",
        Institute: "",
        WorkEnv: "",
        Goals:[],
        Intro: "",
    });

    

    const nextPageNumber = (pageNumber) => {
        switch (pageNumber) {
            case "1":
                setPage("pageone");
                break;
            case "2":
                setPage("pagetwo");
                break;
            case "3":
                setPage("pagethree");
                break;
            case "4":
                setPage("pagefour");
                break;
            case "5":
                alert("You have completed the form");
                break;
            default:
                setPage("1");
        }
    };
    return (
        <div className="grid-pattern-2 h-screen overflow-hidden relative bg-neutral-900 text-neutral-950">
            <main>
                <div className="grid-pattern absolute top-0 right-0 w-full h-full pointer-events-none opacity-25" />
                <div className="bg-zinc-950 py-20 text-zinc-200 selection:bg-zinc-600">
                    <MultiStepProgressBar page={page} onPageNumberClick ={nextPageNumber} />
                    {
                        page === "pageone" && <UserCred nextPage={nextPageNumber} setUserData={setUserData} userData={userData} /> 
                    }
                    {
                        page === "pagetwo" && <PersonalInfo nextPage={nextPageNumber} setUserData={setUserData} userData={userData} /> 
                    }
                    {
                        page === "pagethree" && <UserGoal nextPage={nextPageNumber} setUserData={setUserData} userData={userData}  /> 
                    }
                    {
                        page === "pagefour" && <ExtDown nextPage={nextPageNumber} setUserData={setUserData} userData={userData} />
                    }
                </div>
            </main>
        </div>
    );
};

export default SignUp;
