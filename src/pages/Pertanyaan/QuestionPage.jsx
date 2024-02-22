/* eslint-disable react/no-children-prop */
import CardQuest from "../../components/CardPostQuestion/cardquest";
import { dataQuest } from "../../components/CardPostQuestion/datacardquest";
import HeaderQuest from "../../fragments/headerquest";
import CardScroll from "../../components/CardScroll/cardscroll";
import SidebarLayout from "../../fragments/sidebarlayout";

const QuestionPage = () => {
  const unfollowedData = dataQuest.filter((item) => !item.status);

  return (
    <SidebarLayout>
      <HeaderQuest>
        <div>
          {unfollowedData.map((question, index) => (
            <CardQuest key={index} data={question} />
          ))}
        </div>
      </HeaderQuest>
      <CardScroll />
    </SidebarLayout>
  );
};

export default QuestionPage;
