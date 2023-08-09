import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ContentSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {
        cta ? (
          <Card.Cta>{cta}</Card.Cta>
        ) : null
      }
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Research - Lubin</title>
        <meta
          name="description"
          content="I've explored topics 🔬 in AI and NLP and their industry and social implications."
        />
      </Head>
      <SimpleLayout
        title="I've explored topics 🔬 in AI and NLP and their industry and social implications."
        intro="I've published topics on using AI for healthcare and NLP for innovation mining. I've also been working on research around cloud robotics. My passions include ethical AI, semi-supervised learning, and 3D technology."
      >
        <div className="space-y-20">
          <ContentSection title="Conferences">
            <Appearance
              href="/icsh.pdf"
              title="Identifying Healthcare Fraud with Open Data"
              description="Health care fraud is a serious problem that impacts every patient and consumer. This fraudulent behavior causes excessive financial losses every year and causes significant patient harm. Healthcare fraud includes health insurance fraud, fraudulent billing of insurers for services not provided, and exaggeration of medical services, etc. To identify healthcare fraud thus becomes an urgent task to avoid the abuse and waste of public funds. Existing methods in this research field usually use classified data from governments, which greatly compromises the generalizability and scope of application. This paper introduces a methodology to use publically available data sources to identify potentially fraudulent behavior among physicians. The research involved data pairing of multiple datasets, selection of useful features, comparisons of classification models, and analysis of useful predictors. Our performance evaluation results clearly demonstrate the efficacy of the proposed method."
              event="International Conference for Smart Health 2019, AMCIS 2019, INFORMS 2017"
              cta="View Publication"
            />
            <Appearance
              title="Drug Side Effect Extraction using Modern Transformers"
              description="Drug prescription is a task that doctors face daily with each patient. However, when prescribing drugs, doctors must be conscious of all potential drug side effects. In fact, according to the U.S. Department of Health and Human Services, adverse drug events (ADEs), or harmful side effects, account for 1/3 of total hospital admissions each year. The goal of this research is to utilize novel deep learning methods for accurate detection and identification of professionally unreported drug side effects using widely available public data (open data). Utilizing a manually-labelled dataset of 10,000 reviews gathered from WebMD and Drugs.com, this research proposes a deep learning-based approach utilizing Bidirectional Encoder Representations from Transformers (BERT) based models for ADE detection and extraction and compares results to standard deep learning models and current state-of-the-art extraction models. By utilizing a hybrid of transfer learning from pre-trained BERT representations and sentence embeddings, the proposed model achieves an AUC score of 0.94 for ADE detection and an F1 score of 0.97 for ADE extraction. Previous state of the art deep learning approach achieves an AUC of 0.85 in ADE detection and an F1 of 0.82 in ADE extraction on our dataset of review texts. The results show that a BERT-based model achieves new state-of-the-art results on both the ADE detection and extraction task. This approach can be applied to multiple healthcare and information extraction tasks and used to help solve the problem that doctors face when prescribing drugs. Overall, this research introduces a novel dataset utilizing social media health forum data and shows the viability and capability of using deep learning techniques in ADE detection and extraction as well as information extraction as a whole."
              event="International Science and Engineering Fair 2019"
            />
            <Appearance
              href="/cdss.pdf"
              title="Using Deep Learning to Identify Critical Documents for Clinical Decision Support Systems"
              description="Doctors/Physicians are challenged with effective clinical decision making regarding the treatment plans for patients with specific conditions/symptoms. They often resort to clinical decision support systems to help them come up with the best treatment plan for patients at critical times. However, the search quality of current clinical decision support systems is often low, so they fail to help doctors find relevant medical articles related to their patients' conditions. To help improve search ranking performance in clinical decision support systems, we introduce a novel deep-learning (DL) based learning-to-rank algorithm that can retrieve more relevant and important biomedical articles matching a doctor's search queries containing patients' conditions or symptoms. We compared the performance of the DL-based algorithm to multiple benchmarks (including state-of-the-art system implementations for this task) and found that we achieve better results. The newly designed ranking algorithm can be incorporated into existing clinical decision support systems to assist doctors in making better and more informed clinical decisions, reduce medical costs, and ultimately save patients' lives."
              event="International Science and Engineering Fair 2018"
              cta="View Publication"
            />
          </ContentSection>
          <ContentSection title="Published Papers">
            <Appearance
              href="https://www.sciencedirect.com/science/article/pii/S0306457320308840?dgcid=coauthor"
              title="Mining product innovation ideas from online reviews"
              description="The importance of online customer reviews to product innovation has been well-recognized in prior literature. Mining online reviews has received extensive attention and efforts. Most existing research on mining online reviews focus on issues such as the impact of reviews on sales, helpfulness of reviews, and customers’ participation in reviews. Few research studies, however, seek to identify and extract innovation ideas for products from online reviews. This type of information is particularly important for product functionality improvement and new feature development from a manufacturer's perspective. Mining product innovation ideas allows a manufacturer to proactively review customer opinion and unlock insights about new functionality and features that the market expects, in order to gain a competitive advantage. In this paper, we propose a deep learning-based approach to identify sentences that contain innovation ideas from online reviews. Specifically, we develop a novel ensemble embedding method to generate semantic and contextual representations of the words in review sentences. The resultant representations in each sentence are then used in a long short-term memory (LSTM) model for innovation-sentence identification. Moreover, we adopt a focal loss function in our model to address the class imbalance problem. We validate our approach with a dataset of 10,000 customer reviews from Amazon. Our model achieves an AUC score of 0.91 and an F1 score of 0.89, outperforming a set of state-of-the-art baseline models in the comparison. Our approach can be extended and applied to many other information extraction tasks."
              event="Journal of Information Processing & Management 2019"
              cta="View Publication"
            />
            <Appearance
              href="https://www.sciencedirect.com/science/article/pii/S0306457319308623"
              title="Adverse drug event detection and extraction from open data: A deep learning approach"
              description="Drug prescription is a task that doctors face daily with each patient. However, when prescribing drugs, doctors must be conscious of all potential drug side effects. In fact, according to the U.S. Department of Health and Human Services, adverse drug events (ADEs), or harmful side effects, account for 1/3 of total hospital admissions each year. The goal of this research is to utilize novel deep learning methods for accurate detection and identification of professionally unreported drug side effects using widely available public data (open data). Utilizing a manually-labelled dataset of 10,000 reviews gathered from WebMD and Drugs.com, this research proposes a deep learning-based approach utilizing Bidirectional Encoder Representations from Transformers (BERT) based models for ADE detection and extraction and compares results to standard deep learning models and current state-of-the-art extraction models. By utilizing a hybrid of transfer learning from pre-trained BERT representations and sentence embeddings, the proposed model achieves an AUC score of 0.94 for ADE detection and an F1 score of 0.97 for ADE extraction. Previous state of the art deep learning approach achieves an AUC of 0.85 in ADE detection and an F1 of 0.82 in ADE extraction on our dataset of review texts. The results show that a BERT-based model achieves new state-of-the-art results on both the ADE detection and extraction task. This approach can be applied to multiple healthcare and information extraction tasks and used to help solve the problem that doctors face when prescribing drugs. Overall, this research introduces a novel dataset utilizing social media health forum data and shows the viability and capability of using deep learning techniques in ADE detection and extraction as well as information extraction as a whole."
              event="Journal of Information Processing & Management 2019"
              cta="View Publication"
            />
          </ContentSection>
        </div>
      </SimpleLayout>
    </>
  )
}
