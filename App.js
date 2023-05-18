
import './src.App.css';
import {useEffect,useState} from"react";


export default function App() 
{
  
  
  const n = 8;

  
  const m = 8;

  
  const [chessBoard, setChessBoard] = useState([]);

  useEffect(() => {

      
      const result = [];

      
    }, []);
  
    return (
        <>
            {chessBoard.length > 0 &&
                chessBoard.map((row, rIndex) => {
                    return (
                        <div className="row" key={rIndex}>
                            {row.map((_, cIndex) => {
                                return (
                                    <div
                                        className={`box ${
  
                                            
                                            (rIndex + cIndex) % 2 === 0 
                                                ? "black" : "white"
                                            }`}
                                        key={cIndex}
                                    ></div>
                                );
                            })}
                        </div>
                          );
                        })}
                </>
            );
        }
        