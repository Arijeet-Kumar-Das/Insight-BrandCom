import React from "react";
import Logo from "../../assets/APART Logo2.png";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../assets/CNA_Leaflet_2xA5_Mockup_10.png";
import img2 from "../../assets/CNA_Leaflet_2xA5_Mockup_CNA_10.png";

const CaseStudy2 = () => {
  return (
    <div>
      <Box
        sx={{
          width: { xs: "100%", sm: "60%" },
          p: { xs: "10px", sm: "20px 100px" },
        }}
      >
        <img src={Logo} alt="" />
        <Box marginTop="20px" display="flex" flexDirection="column" gap={2}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            APART
          </Typography>
          <Typography variant="h4">
            Assam Agribusiness and Rural Transformation Project
          </Typography>
          <Typography variant="p">
            World Bank Funded Govt. of Assam Project
          </Typography>
          <Typography variant="h4">Challenges</Typography>
          <Typography variant="p">
            There is a knowledge gap among the rural community and target
            beneficiaries regarding the production of their produce, including
            material inputs, finances, technical know-how, and data information,
            as well as its distribution through backward and forward linkages,
            networking, and marketing. This disparity has caused various
            challenges. To address this, there is a need for CNAS to assess the
            awareness level and knowledge of the target beneficiaries and
            understand their communication needs in selected districts.
            Additionally, it is essential to evaluate the means and content of
            communication that would effectively influence the adoption of
            practices.
          </Typography>
          <Typography variant="h4">
            The Journey: Communication Need Assessment (CNA)
          </Typography>
          <Typography variant="p">
            The use of new forms of information and technology such as mobile
            and the internet has amplified traditional modes of training for
            cultivators and people engaged in agricultural and allied
            activities. Therefore, it is crucial to understand whether the
            target beneficiaries have access to modern technologies such as
            smartphones, the internet, and social media, which could make the
            learning and awareness process more effective.
          </Typography>
          <Typography variant="p">
            The CNA was conducted in 21 districts across Assam as part of the
            APART Project. The data was collected from respondents and project
            beneficiaries during October to November 2020, covering all regions
            from Hailakandi in the south to Sivasagar in upper Assam (north) and
            Kokrajhar in the west.
          </Typography>
          <Typography variant="p">
            The research instruments of the CNA were designed to derive key
            messages related to the project from respondents engaged in
            farming/agriculture, fishery, piggery, and dairy. Women respondents
            were separately interviewed in each district. The objectives were
            divided into key research questions and customized as per the
            respondents' activity, adopting a descriptive research design that
            investigated the background and socio-economic profiling of the
            respondents, their needs and aspirations, and technological skills
            in communication.
          </Typography>
          <Typography variant="p">
            21 districts, divided under 8 zones, were covered in the exercise
            using purposive sampling. Within each selected district, 30
            respondents engaged in agriculture, piggery, fishery, dairy, and
            women beneficiaries were selected using a combination of purpose and
            convenience sampling. The field investigators were given the contact
            of project beneficiaries from respective state project officials,
            and a total of 633 farmers and women beneficiaries were covered in
            the exercise.
          </Typography>
          <Typography variant="p">
            The research tools used in the CNA included a detailed interview
            schedule with a mix of quantitative (with options) and qualitative
            (without options) questions for each category of the respondents.
            Secondary data was collected from department reports, internet
            sources, etc. Data were analyzed using statistical applications and
            presented using tables and charts. Qualitative data was analyzed
            using content and narrative analysis methods, in which common
            responses were clubbed together, and specific comments or responses
            (if found relevant and contextual) were considered in the final
            analysis along with the quantitative information. Field notes were
            prepared by the investigators to supplement the data collected from
            the respondents, and a combination of checks and error- identifying
            methods were used to detect incorrect data which were subsequently
            cleaned. The report was made on the basis of the information
            collected empirically (i.e., from the respondents) and from
            secondary sources.
          </Typography>
          <Typography variant="h4">Impact</Typography>
          <Typography variant="p">
            To effectively bridge the communication gap between the
            beneficiaries and the APART project team, a communication strategy
            was outlined. The primary communication-related needs expressed by
            the beneficiaries in agriculture, dairy, piggery, fishery, and women
            beneficiaries were identified. These included the need for awareness
            and application of modern tools and techniques, crisis management
            mechanisms, guidance on the market and financial support, among
            others. A media and campaign strategy was proposed to increase the
            project outreach and create sustainable mechanisms of communication
            between the beneficiaries and project implementation agencies. The
            strategy could work at two levels: direct communication of service
            providers with the community and indirect communication using
            electronic media. The use of traditional and emerging sources of
            information like mobile phones, WhatsApp, YouTube, and Facebook was
            recommended. Various effective tools of communication like TV,
            radio, direct training, media campaigns, social media, road shows,
            and street plays were suggested as part of the communication
            strategy. Local self-governing bodies and functionaries like Gram
            Sabha, Gram Panchayat, and Gram Sewak could provide orientation and
            refresher training on modern modes of communication, particularly
            mobile- based tools and applications, to enhance the effectiveness
            of their contact with project beneficiaries.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: { xs: "10px", sm: "20px 100px" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <img src={img2} alt="" width="100%" height="250px" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <img src={img1} alt="" width="100%" height="250px" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CaseStudy2;
