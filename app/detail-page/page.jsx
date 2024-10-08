import React from 'react'

const page = () => {
    return (
        // <main className="bg-gradient-to-b from-red-200 via-white to-white min-h-screen">
        // <div className="bg-gray-100 min-h-screen w-screen flex items-center justify-center p-4">
        // <div className="bg-white rounded-3xl shadow-md w-full max-w-md">
        <>

            <div className="bg-gradient-to-b from-blue-400 to-white rounded-t-3xl p-6 flex flex-col items-center">
                <button className="self-start text-black">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ4AqAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAMEBQYCB//EAD0QAAEDAwIEBQEGBAUDBQAAAAECAwQABRESIQYTMUEUIlFhcTIHFSNigZFCUqGxFiQzweFyg/AlQ3OSk//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACcRAAICAQQBAwQDAAAAAAAAAAABAhEDEiExQQQTMlFhcZHwIoHx/9oADAMBAAIRAxEAPwDJ0aFGgBURQo0AKjQpCgBKod80etKkNBFGgKNAg0qFGgA0aFKgA1Aun8NT6g3T+Gk+DTH7kQKVCjWZ2BzSoUc0AKlSpUDLWlSzQzWx5x1SoUaADSoA+x7Uoo8XKjxmlpC33UNJUroCtWkZqXJK7HQaNaJvgyS7Ocgt3yzrltjK2EvHWn5TjIqDdLEu2tyFKululOR3EodYju5cbJOPMMbVyw8/x5yUU9/sx6WVdGhvnHerWDYnJlq+8l3S3Q45dLQ8U5oyR/SujLlhiVz+wkrKuiK0UrgyVEipmSbzaWoqwNLq3iEnPTCiMHPb1qqu1retD0dt2TGlB9rmoXHJUkpzjriscXm4MrUYS5G4NEOlXDi9KCrrgGtCeE5AejsLvNpakyEpW2w46QtQIyNsZq82fHh97FTKKoNz+lJrXv8AB0mPLahv3uztyncaGVvELV8DGayl8ZXGlOxXdJWw8tpZT0JSSNv2qMXlYc+2N32aQVSRV0qVKtDrDQpUqADSpUKALWlQo1seeHNGuaOaAK5IUtWEuqHWp/DzK2b3bkkZzOjjP/cTVF4tUeYtpacpCiAr9a0FqmtJkw5ScrEeS28tKepCVBRx+1Y5VcWXvVmyt9ngSuMorXDccoiWt9Tsu4LcKi6sn/TSSdxnI/VX6093gx7ZO4mt8TPIZdilIWdRGrzYz3wSevbFOxZvCEWcxNZst258d0PNlTycahuNtVG/3m1XMTnoUCcxMmuNF5x1aShQQMDABONhXjYceVZltLTSW/ynfz9ytqIoiWU8LeL8ev755uPD57asY046ad9Xrt7VOhItLXCkaVcIi504SXm4UULVhalackgdceXf474rOkhOD2xVjCuHDptzMa9Q5r7jTjhQuO8lAwrH5hvtXZ5OGSgt29725r462FFmjlWiBYeEbV/iJtU24sFzwkNKzpU44clOkHcJ2yfXYdQKzl7tkqzQrXElkB4R1rKAc8rUsnSO23X0z3qUu58GrgxIZtN05EXmcoCQkEayCc+b1AqtnybQpUZuzsuxYrSDlD6wo6irJIIJrm8OE4z/AJ3u296rvjdjlxwS+KotmiJYTYJxmJUyov5OdJ209hgnfI6jA6VbcQ2mBc5zdss0cPXmYhp2ZKcdJTESEj322xt6Y7kVi7rzDb3TGXhW2w9PSrGbeOB7i74i42S8OSVhPMUh5IGQkDYavYVtnwTjopuVJ7/ir3QR3s0P2hRIbT82RDYYkKVyzOmGSFusOA4CQjVlOQB0H7dRl+KcG6TsHV/nXvMe/nO9aR2/cI3eY3dXuHp6nBgK/ESAvTsNQCsHYAfG1ZjiF9MqbJlIQUJfkOOpSeqQpRIB/el4EckYqE4vZd/6yl7yppUqFeidAaQpUqAFSpUqBlpRrkGjWx54aIrmlmgDO3VspuKzuQTnNP2wnxTYydzg79amyUIckFJwcY/sKMeEWnkLbOQDms5Jplxf8SxpHBOT1rnNIHNaEFvwmlLnFVqStKVoLqgoKTlP0K61prtPfj8afdzTUREUzobRR4Vs+RxDhXvpzvpG/asVAejR57Ds5lx2OCoOobVhSgUlOxyMdfWrlm5cMohSGFw7+846ttwS3Hm+c2W88vSoHA05NeN53jyln102qqvr8mkKosr1eZNvvM1LUaI5Hi3BKCyIreVMhoLWM6c5671BkXyQ4+3ypMZiO7KlpS8i1tv/AIaCnlgJAz0Ndwr7w7FciuiBe3nWJK5KnX1tLU+4pBQSvfcY9MdKhJm8PMhnwn+J4imVuLbUw6ykp14GM9cYAx39axx+PVR9Prmvp/Y2QOLWyxcJzTriVrb5aVOIbCApWhGTpHTJPTtWdMZD41bJPqKvL26me9LcbMkocQlKVSlBTp0oCdSyO5Ke1ZSHOU0cLGRXsY1WOOrmiVyaOCksxUNn6h3pq5HCE4/mpyE+h9kFtWd96auZ/CSfzVr1sOHvIFKgCaWazOsINGuc0s0AdUKGaNMZZ0c1zRzWp55JaYj+BEqVNLCVPqYSlLBcJISlROxGB5hjr0NdOxGUJ5aJwXLMLxiWeQQko5XNxq1HB057Y/vXLFykxramLCkyYyxJW8tbLqkBQKUAA4P5T+9PSLy67CfhKU+Yy7ciMGwoDS4lCfN/0lScEdwo5rjk8+q7/fwVSIb1njDiRVsavBMnmqbUDCIQNIOohWvf6T6Z9qZ8VBS3iLNXIOgk62C0R8bnP6VaXHidhu+JuS59+ca56nfCrUnloCgobfids7H2rLXe4NzeXy7pdJakpUCq4K+gnH04Wr9fgdaWL1dS1fH70XSNZNtLduccTcriiOnnKZaUGFL1lISVKODskax6nOcCuJNuYtzbf3pcOS+ougttRi6kct1bZOrUNiUHG3cfFK6X213l5SpZltoQ+txrw6kFRSsICkqydiCjOrfr0NOm+MLhMxm5V2taEc4eFt5AYwt1awMa09AsJ+ntXaZDEiB4dp9C5qPHsxjJcjKbUBpCOYU8z+fRvjGNsZzUxFjbdu0i2RrqHZUR9DL/ADIxQlOp1LRKfMc4UpOxxVdcp1unJkvvsOuT34vJ5KwjkJc5fL5gPXIxqCcbK71aHjIu3N+VKVKXFF0amstpUAUJQskoVvggpIO/8SR80AVYRGkLjNW2YuW7KdS2hDkUsglRAA3UepNWDNkVJvT1tiTWXcQ/FR30jCZCSUoSBvsStRTn1FQEcQtR5DEtNwvFxfitulj7xUlSEuKTpSr61ZxnJ26gfpw3xPy4aQmKzHuDTC2ozkVpLbaEl1p1JIzsQtDhz+agBxEUq4bTfOcgMLkBhDWndSSD5s9hlKh8g1SucPRmPDJl3dmNKlR/EMNOsqS0UkEpCnSQASB6YBIBNW1/4ih3RM5iFFVFjOuR1R28p8mjnKcz8reUR7DftXNp4igR4jKS5ceUiOWnoHNC4b6yCCohSvLnIJAT16Y6hPihrk4g2tNvZfjvz2xPaY8S5E5ShpARzCjX3WE74xjYgHNP3W2oAlxkzmnLhBbW6/FDSgBoGVpSvoVJAORgfScHaodzudnkLfnvNOOXCTH5ehRRyEuhsN80Hrt9QTjZWPNtXUq821ci4XOM1KTOnNPJWhak8llbySHVpIOpWylEDAxq3JApdDTdnf3CDIkQmbky7cYoJkR0tK0p0/WEr6KKd8jb6Tg7VKb4UVKnSYduuSZDsSTyZHNiqb0jKgVJwVahlPTY7j1pmJfrY5dptzisyBOmJcLjKlILTRd2cUkg5V1VgEDGepxU+TeDJursh2K2mG9MVIWxHQlh1YyopJcQNWpOrPX6qKNfUkUb0GPyG34NxRKSXeWttTRadQcZB0knKffO2N8VHEZz0rQ3C4plQWoyn7hMW26VmTOKS4BjGgEFRx3OT2GBUAClQepIrhEc9KNT6NFB6jGc0s1zmgTVGAc0s+59a5zQJoAvrIAu2OSijmGzylTzkDoWF6R/+jTQ+VVLlxEoQVR2wEXdu43NOR0SqAdI6dluOjH5ayE2NczFTLiRJyoxBDq2ml8tSQc7kbbH1pW64ocKErdcSUp0oyskJSeoHoP6UmylZrrZd7o9/hND9xlLS9c1IeC3SeYkOMYSr2GTt7mq/wD9PHD93MBycpQlxgsSWUIAH42NOlRz3646VXMsTZKlGDFlSEsrKtTDa1hs53OQNu37VECzoWlJVpJ84ztkevxk9fWqJNXY2mfupi3PzIcd298zU2+F8wjdEYpwkgfihR3UNsVKgN/edw4ZtzjWifBbgymtScF1olHPbPuMBYH/AMlYxhqXLdCIjMmU42kbMtqcKAOmw3AHb0pt1yQ1I1LcfblNnGVqUHEe2TuPikBbx56BZX7kWlfeUFYgMPY20OBZQs/nQlt1IP5kfy0eEYSLr460O45bvh5BV2Qlt5KXCP8AtuLJ+KomEPPOCNGS884rzclpKllRHcJHXGTv71263JhSC28h+K9pOULSppek+2xwf2NMDZqbZv0ZN4kpQxFvi43iic4abjl1cj4wlhv5yKCHUybgviVM9BcNtmsSpFtbUC04gakaQsIJIbWkb4zoO9YptbvkZZU8rOQhpsk51dQEjrn+tCfbp0bAdamROaMaHkLaDm2OhxnakykayNf9XD8mUb5f8m4NNJfS2jnqHKWdB/Exp7/V17VGmMyZN94YlBuS+ytqIpb7jZOo+IXkrIyM7gnfvWSZC2WyhxSg3q1FGds42P7VYyBeIcZHOF2ixdgnmB1DR7jGcD4xSQ2ty64hmSXJy23pd/dbTKWUouLOlkHzfQdR3wTjbpmoaTjpgVUJmy3ltCTMkPN5yA48pYB9dzjv/WrUGgDvPuT80QaboigDvajXNKgCKTQpbUs0yBUjQzQzQALpNnvKMsTZAltkFDqXVJUnHZODsPYdKii8IkK5k+026XJP/vK5jSlH1WltaUk+pwCe+a9G+ziDwrfGl226WeS/cY7Dsh2TzVJQtAWAEgJWN8KHYDY71zb+GeH+MuF75N4Ssa2ZaXm24aJEgpKPK2VdVkd1daTVlRdcmIVc5k5ttx584R/pIa/DbaHYISMBO3tnanl3VUlKTcoke4LTsHnlOJcI7ZWhQK/lWTXqdq+z6yMybNDuVqCpK7U47LbEhfnfSWQTkK9VK6YFZP7ULHb7J92fd1ndtvP5uvW/zeZjTj+NWMZPzTQnyZGTcZEhtEbUmPEQfw4zGUtpPqRnKlfmUSfenBc3lspYntN3BlvZCZJXqbHolaSFAflzp9q9KsfCfDEjhq2XyVBRyjaHHpSVPuBKnk6PN9W24Xt03qbM+z/hyPPSwqDjxd1Q1Hy855GgwHVp+rvy3Nzv5vYUMDyV65vKjmLGQ3AjLOpbMXWOYfzqUSpeOwJwOwrlm5SEMiM+Ey4ec+GlErSnPdJB1IPukjNehcUcKWFuZw0/areqNElXpVvltlxw81PMKckk5H+mrGMbK+Kzs20W1r7VTY0R9Nu8ey1ydasFCkJJGc57nvQIo/vNbTS0WyOzbkugBxcZay44PTmLUSB6hJAPfNQIV6l299xkOl1hwnmMPfiNOD3Sdvg7EdiK0N9tdtjfaFJtGvwVsE9plSs55baggnzHJ7nc561sePuC+GrRYJ78Xh2cFtMEsT2pRcRr7a08wnGe5SR6mhqylyYH72S00h61w4kOQBgSGlOOOoyN9JcUrSfzDCveoDNwnRXlvR5jqVrGF6law5nqFpVlKwfRQIq9+z7h+1S7beOIOIue5bLWlP8Al46sKeXjO+MH07jr12rUW/hXhbiFNnvtjiyY0Bc/w06BIcUc7HBByTnOnodwfakuAdJnnouTKFh1mzW5qTnVzAHVhJ/mDa1lHfukgelSkHKUk9xW/wDtJ4Rsdl4amS7bw85FdadaSiX4grGC4kHCSsncHHTvXnkdWphJ76aB3Y9RzQoUAOUqANKgCJmlmuaFUQdZoZoVytaUpyo4PpRQFzwvxMrhKfJuIheMC4qo+jm8vGSk6s6T/L/WmOGeLF23hC4WCO04h+Y4lwS23y2pvSEDAAGT9Hr3qmkFTjS0pTjNQGIjwOHE6B/WpY0eow/tOdhG2F60eJXEt6oa1LmnLxPLyo5QTn8P3+rrWe4v4nh8RmJ4ayM2vw5Xq0PBfN1acfwj+X3qf9k7ECTxg3DuEWPKYkxHG0tvthY1DCgd++Eq/evSo/DljfYatP3ZBMmCxb3nnPDo1qy6dWo4ydQbOc9c+9NAzy2Nxq61wI7wn4JJDqXEJm8/dKFr1EadPuR17itA59rbjk2DIdsaFqiIWCPG4DiykJ1Z0bba9vze1bezWa0uEPo4fguNyrrIZWTDQQy22HEA9NgS0n/7+9Uf2f2O3sWO9onW61PvQ7y/GQ7PQnAQNIA1EE0xGTk/ahPuEGI1d7fHkSIs9qY28y7ygdCgdGkg7kahnPfpUp7j633GeLingyE1cEPtPGYJILnkUk4zy87hOP1re2602ZTF0kqtHDpUiYlCVFKOSkcprYL0e52x1NZniuJb43CXEUtqFbWXGbmwhtyKlOhtJQxkJUANt1Z6bk0DKm78X2q4vmZ/hG3NXAvtP+LW8lSlFC0qIJ5edwnT8Gubpxwl/h+XaLZw5CtbExsturYfCgEnY6UBCcHB6/3q8+y+NbJnDF0mSodrkqbnaEOTQnQkaG8AqIOBv++1WcJjhf75uKZUWwi4K0JjNLUPDKToBIQSnGvJUSAM4xmpGeY8LcQv8KeL0RGLjbpydEmFIUAlz9cEDYkHY5/QVaP/AGhyOfaBbuH2Ldarc/4jwEZZw6rBxlQQAB5ieh3rvjyF4PiBKBaI1sSYiFFmMsLaWdS/Ok6U+wwQD5Tt0JoWlKzlWAPmhcFV2QOIL1KvV1mTlqkMtSXS6Iyn1LSj0GNgcfFKArMcexxRmQUrfUtpaEqUAdJzTcJK2tbTqcEHOPWgK2JlKlSoEGhSoUARaBpavgfNJWUo1lPl9T0pkDbi9AwOtM68K1d6HMSkLUvcnZI/3pnVmtGqITseDnvRCt853plNOJGE5Vuc7gVLLRYWa5yLPdYt0hBsyIiypsOJJScgjBA3xgmtJE+0O/xr7cLyhiAXpbTbbqFNq5aQ3nGBrznc9+9Y8YH0lR/6hXSVFPQYpga9vj7idqPbBFfjsMQ85Shs4knIJ5pJPUg9NP1H2qsunF9yudruVvlR4SI9zlpmPKbbXlKwEDy5VgA8sbHfc1UN/wCXTzEbtuZw2egPrj/zpTsKYhptXOQMBRwrGSBSat2g4ST7J8C8SkcLOcPBqKbe9I8QVaDzNWUnY5xjyjtVxw7xlcuGbe7At8eC4wt4vkyG1qIJAHZQGNhWWDoLjjiN9Ss04lYznv6ijotI2cX7Rr4w9LdRFtWZbqXHQphzSFBCU7efphI/Wuk/aFf2ZMlxuNaSmQU8xpUdZSSAE5Hn26CsYF4xjt0olWep+Pas7L0osOJL1cL9PXMui2y6W0taWE6UpSMkAAknqSapwQ2MBRx81McJLYIOw2Pz2phTYP1b07DTuNuLOtKsnpgU8zreRqUMFO3zTLgT5Up3071MYQCgKJ3FFi6GySOoo5p1adQAAJV3xTJQpP1JIFFkhzSrnI9hSoAsERmWceQe5O9VF2ltyCGWvoT9R6Z+K7vNweakiO3hKAnKzjck1XbOq1AaT1NaQVmcnQwQlSgpR3H0/wDNcny+9OuJBHvTAyO9NsSVDgdA6gfvQXJVqKkJUon0GK6GD1A/augkl3TnapKG/FOHqhVdMyOYdOClfoqkCD0GP1pNIBcUT1FMCYt9LpSE9EgAj+9BoKKTgatIyc/NRmUBC14+aklRbjuq7rIQD6bZ/wBqE9hVbOVOBDuM6QdiD1BFOJdFMy3UupzpIXgZV13xUUPKTgq7+lT0a8FolzPWu+Z71EaOsgDau9VZs0ROQ6OWQehz/wAVy2QtWFb1DWVYAB71IbOk5pWUguwlLBW2/hR7FO1OMlbaCHD8VGec1Kxvj5pazpAz0qkSx24PqTFIbWUqJ69Kq2psqO6ClbhV1KSokH9DT8jzqIPRNRnCrWEnAIGARSsTRp0OsvJBU2Bn07UqpY1z5CwkpJz16UqeonQz/9k="
                    alt="Shopping"
                    className="w-full h-auto mt-2 rounded-xl mt-7"
                />
            </div>
            <div className="p-6">
                <div className="flex justify-around border-b-2 border-gray-200 pb-2 mb-4">
                    <button className="text-blue-500 font-semibold border-b-4 border-blue-500 pb-1">
                        Information
                    </button>
                    <button className="text-gray-500">Lesson Plan</button>
                </div>
                <div className="mb-4">
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-500">Type</span>
                        <span className="text-blue-500">Buy 1 Get 1 Free</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-500">Validity</span>
                        <span className="text-blue-500">2-3 days</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-500">Rating</span>
                        <span className="text-blue-500">4</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4 mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11zM7.248 12c-1.255 0-2.27.91-2.272 2.065C4.974 15.36 6.438 17 9 17c2.562 0 4.025-1.64 4.025-2.935-.002-1.155-1.017-2.065-2.272-2.065H7.248z"
                                />
                            </svg>
                            Sweet
                        </span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4 mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11zM7.248 12c-1.255 0-2.27.91-2.272 2.065C4.974 15.36 6.438 17 9 17c2.562 0 4.025-1.64 4.025-2.935-.002-1.155-1.017-2.065-2.272-2.065H7.248z"
                                />
                            </svg>
                            Dessert
                        </span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4 mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11zM7.248 12c-1.255 0-2.27.91-2.272 2.065C4.974 15.36 6.438 17 9 17c2.562 0 4.025-1.64 4.025-2.935-.002-1.155-1.017-2.065-2.272-2.065H7.248z"
                                />
                            </svg>
                            Waffles
                        </span>
                    </div>
                </div>
                <div className="border-t-2 border-gray-200 pt-4">
                    <h3 className="font-semibold">What youll learn</h3>
                    <p className="text-gray-500 mt-2">
                        This playlist starts you off with planning a night out youre sure
                        to enjoy. And, if you choose a trip to the movies, youll be able
                        to share your thoughts and choose a movie youll enjoy.
                    </p>
                    <button className="text-blue-500 mt-2">Read More</button>
                </div>
            </div>
        </>
    )
}

export default page