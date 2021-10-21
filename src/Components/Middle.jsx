import Center from "../UI/Common/Common.styled";
import MiddlePart from "../UI/MiddlePart/Middle.styled";

const Middle = () => {
  return (
    <MiddlePart>
      <Center>
        <h1>Monthly Subscription</h1>
        <p>
          <span>$29</span> <span>per month</span>
        </p>
        <p>Full access for less than $1 a day</p>
        <button>Sign Up</button>
      </Center>
    </MiddlePart>
  );
};

export default Middle;
