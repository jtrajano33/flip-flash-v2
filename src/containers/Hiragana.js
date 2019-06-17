import React, {useEffect} from 'react';

const Hiragana = () => {


    return(
	<div className="container super">
		
		<div className="row">
			<div className="col-12 col-md-8 offset-md-1 tableTitle">
				<h1>HIRAGANA CHART</h1>
			</div>	
		</div>

		<div className="row">
			<div className="col-hidden col-md-1"></div>

			<div className="col-12 col-sm-12 col-md-10 scroll">

				<div className="row row1">
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-a.png" />
							</div>

							<div className="back">
								<p id="read">Reading:</p>
								<p id="read">A</p>
							</div>
						</div>
						</div>
					</div>


					<div className=" col-2 col-md-2">
						<div className="whole">
							<div className="box">
								<div className="front">
									<img className="img-fluid" src="images/hiragana/hiragana-i.png" />
								</div>

								<div className="back">
									<p>Reading:</p>
									<p>I</p>
								</div>
							</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-u.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>U</p>
							</div>
						</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-e.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>E</p>
							</div>
						</div>
						</div>
					</div>
					<div className=" col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-o.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>O</p>
							</div>
						</div>
						</div>
					</div>

					<div className=" d-none d-sm-block col-sm-2 col-md-2">
						<div className="whole">
							
								<div className="hello"></div>
					
						</div>
					</div>
					
				</div>

				<div className="row row2">
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-ka.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>KA</p>

							</div>
						</div>
						</div>
					</div>


					<div className="col-2 col-md-2">
						<div className="whole">
							<div className="box">
								<div className="front">
									<img className="img-fluid" src="images/hiragana/hiragana-ki.png" />
								</div>

								<div className="back">
									<p>Reading:</p>
									<p>KI</p>
								</div>
							</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-ku.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>KU</p>
							</div>
						</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-ke.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>KE</p>
							</div>
						</div>
						</div>
					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-ko.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>KO</p>
							</div>
						</div>
						</div>
					</div>

					<div className="d-none d-sm-block col-sm-2 col-md-2 ">
						<div className="whole">
							
								<div className="hello"></div>
					
						</div>
					</div>
					
				</div>

				<div className="row row3">
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-sa.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>SA</p>
							</div>
						</div>
						</div>
					</div>


					<div className="col-2 col-md-2">
						<div className="whole">
							<div className="box">
								<div className="front">
									<img className="img-fluid" src="images/hiragana/hiragana-shi.png" />
								</div>

								<div className="back">
									<p>Reading:</p>
									<p>SHI</p>
								</div>
							</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-su.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>SU</p>
							</div>
						</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-se.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>SE</p>
							</div>
						</div>
						</div>
					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-so.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>SO</p>
							</div>
						</div>
						</div>
					</div>

					<div className="d-none d-sm-block col-sm-2 col-md-2">
						<div className="whole">
							
								<div className="hello"></div>
					
						</div>
					</div>
					
				</div>

				<div className="row row4">
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-ta.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>TA</p>
							</div>
						</div>
						</div>
					</div>


					<div className="col-2 col-md-2">
						<div className="whole">
							<div className="box">
								<div className="front">
									<img className="img-fluid" src="images/hiragana/hiragana-chi.png" />
								</div>

								<div className="back">
									<p>Reading:</p>
									<p>CHI</p>
								</div>
							</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-tsu.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>TSU</p>
							</div>
						</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-te.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>TE</p>
							</div>
						</div>
						</div>
					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-to.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>TO</p>
							</div>
						</div>
						</div>
					</div>

					<div className="d-none d-sm-block col-sm-2 col-md-2">
						<div className="whole">
							
								<div className="hello"></div>
					
						</div>
					</div>
					
				</div>

				<div className="row row5">
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-na.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>NA</p>
							</div>
						</div>
						</div>
					</div>


					<div className="col-2 col-md-2">
						<div className="whole">
							<div className="box">
								<div className="front">
									<img className="img-fluid" src="images/hiragana/hiragana-ni.png" />
								</div>

								<div className="back">
									<p>Reading:</p>
									<p>NI</p>
								</div>
							</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-nu.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>NU</p>
							</div>
						</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-ne.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>NE</p>
							</div>
						</div>
						</div>
					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-no.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>NO</p>
							</div>
						</div>
						</div>
					</div>

					<div className="d-none d-sm-block col-sm-2 col-md-2">
						<div className="whole">
							
								<div className="hello"></div>
					
						</div>
					</div>
					
				</div>

				<div className="row row6">
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-ha.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>HA</p>
							</div>
						</div>
						</div>
					</div>


					<div className="col-2 col-md-2">
						<div className="whole">
							<div className="box">
								<div className="front">
									<img className="img-fluid" src="images/hiragana/hiragana-hi.png" />
								</div>

								<div className="back">
									<p>Reading:</p>
									<p>HI</p>
								</div>
							</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-fu.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>FU</p>
							</div>
						</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-he.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>HE</p>
							</div>
						</div>
						</div>
					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-ho.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>HO</p>
							</div>
						</div>
						</div>
					</div>

					<div className="d-none d-sm-block col-sm-2 col-md-2">
						<div className="whole">
							
								<div className="hello"></div>
					
						</div>
					</div>
					
				</div>

				<div className=" row row7">
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-ma.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>MA</p>
							</div>
						</div>
						</div>
					</div>


					<div className="col-2 col-md-2">
						<div className="whole">
							<div className="box">
								<div className="front">
									<img className="img-fluid" src="images/hiragana/hiragana-mi.png" />
								</div>

								<div className="back">
									<p>Reading:</p>
									<p>MI</p>
								</div>
							</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-mu.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>MU</p>
							</div>
						</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-me.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>ME</p>
							</div>
						</div>
						</div>
					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-mo.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>MO</p>
							</div>
						</div>
						</div>
					</div>

					<div className="d-none d-sm-block  col-sm-2 col-md-2">
						<div className="whole">
							
								<div className="hello"></div>
					
						</div>
					</div>
					
				</div>

				<div className="row row8">
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-ya.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>YA</p>
							</div>
						</div>
						</div>
					</div>


					<div className="col-2 col-md-2">
						<div className="whole">
							<div className="box">
								<div className="front">
									<p></p>
								</div>

								<div className="back">
									<p>No</p>
									<p>Description</p>
								</div>
							</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-yu.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>YU</p>
							</div>
						</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<p></p>
							</div>

							<div className="back">
								<p>No</p>
								<p>Description</p>
							</div>
						</div>
						</div>
					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-yo.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>YO</p>
							</div>
						</div>
						</div>
					</div>
					
					<div className="d-none d-sm-block col-sm-2 col-md-2">
						<div className="whole">
							
								<div className="hello"></div>
					
						</div>
					</div>

				</div>

				<div className="row row9">
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-ra.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>RA</p>
							</div>
						</div>
						</div>
					</div>


					<div className="col-2 col-md-2">
						<div className="whole">
							<div className="box">
								<div className="front">
									<img className="img-fluid" src="images/hiragana/hiragana-ri.png" />
								</div>

								<div className="back">
									<p>Reading:</p>
									<p>RI</p>
								</div>
							</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-ru.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>RU</p>
							</div>
						</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-re.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>RE</p>
							</div>
						</div>
						</div>
					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-ro.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>RO</p>
							</div>
						</div>
						</div>
					</div>

					<div className="d-none d-sm-block col-sm-2 col-md-2">
						<div className="whole">
							
								<div className="hello"></div>
					
						</div>
					</div>
					
				</div>

				<div className="row row10">
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-wa.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>WA</p>
							</div>
						</div>
						</div>
					</div>


					<div className="col-2 col-md-2">
						<div className="whole">
							<div className="box">
								<div className="front">
									<p></p>
								</div>

								<div className="back">
									<p>No</p>
									<p>Description</p>
								</div>
							</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-n.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>N</p>
							</div>
						</div>
						</div>

					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<p></p>
							</div>

							<div className="back">
								<p>No</p>
								<p>Description</p>
							</div>
						</div>
						</div>
					</div>
					<div className="col-2 col-md-2">
						<div className="whole">
						<div className="box">
							<div className="front">
								<img className="img-fluid" src="images/hiragana/hiragana-wo.png" />
							</div>

							<div className="back">
								<p>Reading:</p>
								<p>WO</p>
							</div>
						</div>
						</div>
					</div>

					<div className="d-none d-sm-block  col-sm-2 col-md-2">
						<div className="whole">
							
								<div className="hello"></div>
					
						</div>
					</div>
					
				</div>
			</div>

			<div className=" col-sm-0 col-md-1"></div>
		</div>		
	</div>
    )

}

export default Hiragana;