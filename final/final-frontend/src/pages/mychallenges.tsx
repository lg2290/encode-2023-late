import Header from "../components/Header"
import {  TrashIcon } from '@heroicons/react/20/solid'
import Footer from "../components/Footer"
import Notification from '../components/Notification/Notification'
import {useState} from 'react'
import CreateChallenge from "../components/CreateChallenge"

const challenges = [
    {
      name: 'Bitcoin',
      challenge: 'Greater than 31000 ',
      date: 'By 04/12/2023',
      status: 'Open',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png'   },
       { name: 'Bitcoin',
        challenge: 'Greater than 31000 ',
        date: 'By 04/12/2023',
        status: 'Open',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png'   },
          {
            name: 'Bitcoin',
            challenge: 'Greater than 31000 ',
            date: 'By 04/12/2023',
            status: 'Open',
            imageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png'   },
             { name: 'Bitcoin',
              challenge: 'Greater than 31000 ',
              date: 'By 04/12/2023',
              status: 'Open',
              imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png'   },
      
        ]
  

export default function  Challenges(){
  const [openCreateChallenge, setOpenCreateChallenge] = useState(false)


   // NOTIFICATIONS functions
   const [notificationTitle, setNotificationTitle] = useState();
   const [notificationDescription, setNotificationDescription] = useState();
   const [dialogType, setDialogType] = useState(1);
   const [show, setShow] = useState(false);
   const close = async () => {
     setShow(false);
   };
   const createChallenge = (token:string,date:Date,greaterThanOrLessThan:string,price:number) => {
    setNotificationTitle("Create Challenge")
    setNotificationDescription("Challenge Successfully created.")
    setDialogType(1)  //1 Green Success 2 Red Error
    setShow(true)
  }
  const closeCreateChallenge = () => {
    setOpenCreateChallenge(false)
  }

  const deleteChallenge = (id:number) =>{
    setNotificationTitle("Delete Challenge")
    setNotificationDescription("Cannot Delete Challenge.")
    setDialogType(2)  //1 Green Success 2 Red Error
    setShow(true)
 
   }
    return (    <div className="bg-gray-900 pt-16">
    <Header />
    <div className="text-center">

    <h1 className="pt-4 text-3xl font-bold tracking-tight text-white sm:text-3xl">
              My Challenges
            </h1></div>
            <button     
                              onClick={()=>setOpenCreateChallenge(true)}
           
                              className="ml-6 inline-flex justify-center rounded-md bg-indigo-600  py-3 px-7 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                              >Create Challenge</button>        
    <ul role="list" className="pt-14 pb-10 pl-4 pr-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {challenges.map((challenge,index) => (
        <li
          key={index}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={challenge.imageUrl} alt="" />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{challenge.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Challenge</dt>
              <dd className="text-sm text-gray-500">{challenge.challenge}</dd>
              <dd className="text-sm text-gray-500">{challenge.date}</dd>

              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  {challenge.status}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <button
                 onClick={()=>deleteChallenge(index)}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <TrashIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Delete
                </button>
              </div>
              
            </div>
          </div>
        </li>
      ))}
    </ul>
    <Footer />
    <CreateChallenge open={openCreateChallenge} setOpen={closeCreateChallenge} createChallenge={createChallenge} />

    <Notification
        type={dialogType}
        show={show}
        close={close}
        title={notificationTitle}
        description={notificationDescription}
      />
    </div>)
}
