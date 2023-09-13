import React, { useState } from 'react';
import { Emails } from '@app/store/types/Subject';

type MyComponentProps = {
  emails: Emails[];
};

const SubjectEmails: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  console.log(props.emails);

  return (
    <div>
      {/*<button onClick={toggleExpansion}>{isExpanded ? 'Свернуть emails' : 'Развернуть emails'}</button>*/}

      {isExpanded && (
        <div>
          {props.emails.length > 0 ? (
            <div>
              <span>Емэйл: </span>
              {props.emails.map((email) => (
                <span key={email.email}>{email.email} </span>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubjectEmails;
