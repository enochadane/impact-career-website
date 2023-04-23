import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Typography } from "@mui/material";

const Recommendations = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className='Banner profile-banner'>
        <div className='bg-black bg-opacity-50 px-4 rounded'>
          <h1>Recommended for you</h1>
        </div>
      </div>
      <Box
        sx={{
          maxWidth: "700px",
          margin: "auto",
          padding: "30px 10px",
        }}
      >
        {user.matches.length === 0 && (
          <Typography variant='h6' sx={{ textAlign: "center" }}>
            Job recommendations will appear here.
          </Typography>
        )}
        {user.matches.map((match, i) => (
          <div className='col-md-12 mb-3'>
            <div
              className='card col-12 candidates'
              style={{
                border: "1px solid #ddd",
                paddingBottom: "10px",
              }}
            >
              <div className='row g-1 '>
                <div
                  className='col-md-2 col-lg-2 col-4'
                  style={{ margin: "auto" }}
                >
                  <img
                    src={"/images/brif_case_2.png"}
                    width={100}
                    height={100}
                  ></img>
                </div>
                <div className='col-md-7 col-7'>
                  <Link
                    className='candidatesLink'
                    style={{ textDecoration: "none", color: "black" }}
                    key={i}
                    href={match.urlSlug}
                  >
                    <div className='card-body senior-product '>
                      <h5 className='card-title mt-3'>{match.title}</h5>
                      <p className='card-text'>
                        {match.companyName}
                        {match.location}
                        {match.salary}
                      </p>
                    </div>
                  </Link>
                </div>
                <div
                  className='col-md-2 col-lg-2 col-12'
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  <Link
                    target='_blank'
                    className='candidatesLink'
                    style={{ textDecoration: "none" }}
                    key={i}
                    href={match.url}
                  >
                    <Button
                      variant='contained'
                      sx={{
                        borderRadius: "5",
                        backgroundColor: "#009F01",
                      }}
                    >
                      Apply
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Box>
    </>
  );
};

export default Recommendations;
