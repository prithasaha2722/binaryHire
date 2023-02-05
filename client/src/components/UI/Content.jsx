import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store";
import FullImage from "./FullImage";
import { skills } from "./Post";
const imageURL = ['data:image/jpeg;base64,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','data:image/jpeg;base64,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','https://wpastra.com/wp-content/uploads/2021/02/Bill-erickson-portfolio-website.jpeg','https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc','https://1.bp.blogspot.com/-qe5ILcuEWbk/YKUsalr4xrI/AAAAAAAAAN8/gE5Qh371uhQapkicwhqPPijFWjki0dbAACLcBGAsYHQ/s1280/Responsive%2BPortfolio%2BWebsite-jpeg.jpg']
const sites = ['rleonardi.com','y78.fr','danielspatzek.com','toyfight.co','studioschurk.nl']

const Content = (props) => {
    const dispatch  = useDispatch();
    const imageClick = (e, i) =>{
        e.preventDefault()
        e.stopPropagation();
        dispatch(modalActions.imageOpen())
        props.imageURL(i)

    }
  return (
    <div style={{height: 'calc(100% - 60px)'}} className="px-4 w-full overflow-hidden no-scrollbar overflow-y-auto pb-4">
      <h2 className="text-5xl font-semibold mb-2">{props.name}</h2>
      <div className="flex text-2xl text-gray-700 my-5">
        <div className="flex flex-col mr-5">
          <span>${props.rate}</span>
          <span className="font-semibold">Fixed Price</span>
        </div>
        <div className="flex flex-col">
          <span>{props.date}</span>
          <span className="font-semibold">Completion Date</span>
        </div>
      </div>
      <div className="text-2xl my-5">
        {props.ldesc}
      </div>
      <div className="w-full  flex flex-wrap">
        {props.skills.map((i) => (
          <div className="mr-3 bg-[#4F70C7] px-3 py-1 text-white rounded-2xl text-xl">
            {i}
          </div>
        ))}
      </div>
      <div className="w-full  flex overflow-x-auto mt-5 no-scrollbar">
            {imageURL.map((i,index)=>(
                <img draggable={false} key={index} className="h-[300px] m-2" src={i} alt={sites[index]} onClick={(e) => imageClick(e,i)}/>
            ))}
      </div>
      
    </div>
  );
};

export default Content;
