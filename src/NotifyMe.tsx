import React, { useState } from 'react';
import { X } from 'lucide-react';

const NotifyMeForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phoneNumber, setphoneNumber] = useState<string>('');

  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try {
      const response = await fetch('https://formbold.com/s/9gJ5M', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": email,
          "name": name,
          "phone_number": phoneNumber
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // const data = await response.json();
      // alert(`Subscription successful: ${data.message}`);
    } catch (error) {
      alert(`Failed to subscribe: ${error}`);
    }

    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Notify Me</button>

      {isOpen && (
        <div className="overlay">
          <div className="modal">
            <button className="closeButton" type="button" onClick={handleClose}><X /></button>
            <h2>Subscribe for Updates</h2>
            <form onSubmit={handleSubmit} method='POST'>
              <label htmlFor="names">Name
                <input
                  type="text"
                  value={name}
                  name='names'
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                />
              </label>
              <label htmlFor="email">Email
                <input
                  type="email"
                  value={email}
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </label>
              <label htmlFor='telephone'>Mobile
                <input
                  type="tel"
                  value={phoneNumber}
                  name='telephone'
                  onChange={(e) => setphoneNumber(e.target.value)}
                  placeholder="Phone number"
                />
              </label>
              <span>
                <button type="submit">Submit</button>
              </span>
            </form>
          </div>
        </div>
      )
      }

      <style>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal {
          background: #2d3748;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          position: relative;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        input {
          margin-bottom: 10px;
          padding: 8px;
          margin-left: 10px;
          width: 15rem;
        }
          .closeButton {
          padding: 0px;
          margin: 0px;
          background-color: #2d3748;
          position: absolute;
          right: 5px;
          top: 5px;
          ;
          }
        button {
          background-color: #4299e1; /* bg-blue-500 */
          &:hover {
          background-color: #3182ce; /* hover:bg-blue-600 */
          }
          color: white;
          font-weight: bold;
          padding: 0.75rem 1.5rem; /* py-3 px-8 equivalent, adjusted for mobile */
          border-radius: 0.5rem; /* rounded-lg */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
          transition: all 0.3s ease; /* transition-colors duration-300 transform */
          &:hover {
            transform: scale(1.05); /* hover:scale-105 */
          }
          
          &:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); /* focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 */
          }

          @media (min-width: 768px) {
            padding: 1rem 2rem; /* py-3 px-8 */
          }
        }
          form>button {
          margin-top: 1rem;
          margin-bottom: 1rem;
          }
          label {
          text-align: right;

          }
          
      `}
      </style>
    </div >
  );
};

export default NotifyMeForm;