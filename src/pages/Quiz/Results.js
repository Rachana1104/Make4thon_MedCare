import React from "react";

const Results = () => {
  const final = sessionStorage.getItem("Score");
  if ("350" < final && final <= "400") {
    return (
      <center>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            padding: "5rem",
          }}
        >
          It seems that you are quite happy and contented in your life. Always
          keep up the same energy and lead a happy and joyful life.
        </div>
      </center>
    );
  }
  if ("300" <= final && final <= "350") {
    return (
      <center>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            padding: "5rem",
          }}
        >
          You've answered this depression test in a manner that suggests that
          while you may occasionally be experiencing some depressive symptoms
          from time to time, you're not likely to be suffering a major
          depressive episode at present. Most people experience depressive
          feelings from time to time in their lives -- this is normal and
          expected. No need to worry at all. Practising yoga and meditation would help it out :)
        </div>
      </center>
    );
  } else if ("200" <= final && final < "300") {
    return (
      <center>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            padding: "5rem",
          }}
        >
          {" "}
          For most people, this kind of response is likely an indication of the
          normal ups and downs associated with life. It's okay if you need time
          by yourself, but theres no shame in relying on friends, family or
          others if you have to.
        </div>
      </center>
    );
  } else if ("100" <= final && final < "200") {
    return (
      <center>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            padding: "5rem",
          }}
        >
          {" "}
          These type of people occasionally complain of feeling unmotivated,
          lacking energy, and having sleep problems. They feel lonely once in
          awhile but rarely feel hopeless or completely alone. Don't be afraid
          to distance yourself from a stressful situation if you have to. Your
          mental health impacts a lot of your physical health as well. Exercise
          and practise yoga :)
        </div>
      </center>
    );
  } else if ("100" < final && final >= "0") {
    return (
      <center>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            padding: "5rem",
          }}
        >
          Remember that a little anxiety in normal, everyday life is to be
          expected and is a good thing. Nobody should be without any anxiety
          whatsoever, as anxiety is our body's way of telling us that we should
          pay closer attention to a situation, event or person in our lives
          (even if that person is ourselves). Your feelings are valid no matter
          what. One way to let it out is to exercise :)
        </div>
      </center>
    );
  }
};

export default Results;
