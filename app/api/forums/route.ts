import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "General Discussion",
    description: "Discuss anything and everything related to law.",
    createdOn: "2021-01-01T00:00:00.000Z",
  },
  {
    id: 2,
    title: "What are the basic rights guaranteed by the Constitution?",
    description:
      "The Constitution guarantees various rights to its citizens, including but not limited to freedom of speech, freedom of religion, the right to bear arms, and the right to a fair trial. In addition to those mentioned, the Constitution also ensures the right to privacy, the right to assemble peacefully, and protection against unreasonable searches and seizures. Moreover, it guarantees equal protection under the law and prohibits discrimination based on race, gender, or religion.",
    createdOn: "2024-03-16T08:00:00.000Z",
  },
  {
    id: 3,
    title: "How does the court system work in the United States?",
    description:
      "The court system in the United States is composed of federal and state courts. Federal courts handle cases involving federal law, disputes between states, and cases between citizens of different states. State courts handle cases involving state law and disputes between residents of the same state. Cases typically start in trial courts, where evidence is presented and witnesses testify. Decisions made in trial courts can be appealed to higher courts, such as appellate courts, and eventually to the Supreme Court if necessary.",
    createdOn: "2024-03-16T09:00:00.000Z",
  },
  {
    id: 4,
    title: "What is the difference between civil law and criminal law?",
    description:
      "Civil law deals with disputes between individuals or organizations, such as contracts, property disputes, and family matters. The goal of civil law is to compensate the injured party and resolve conflicts. Criminal law, on the other hand, deals with offenses against society as a whole, such as murder, theft, and assault. The state prosecutes individuals accused of committing crimes, and the goal is to punish the offender and protect society.",
    createdOn: "2024-03-16T10:00:00.000Z",
  },
  {
    id: 5,
    title: "What are the different types of legal systems around the world?",
    description:
      "There are several types of legal systems around the world, including common law, civil law, religious law, and customary law. Common law systems, such as those in the United States and the United Kingdom, rely on judicial decisions and precedent to interpret the law. Civil law systems, found in countries like France and Germany, are based on codified laws and statutes. Religious law systems, such as Islamic law, are based on religious texts and teachings. Customary law systems are based on traditions and practices unique to a particular culture or community.",
    createdOn: "2024-03-16T11:00:00.000Z",
  },
  {
    id: 6,
    title: "What are the steps involved in the legal process?",
    description:
      "The legal process typically involves several steps, including investigation, filing a complaint or petition, discovery, pretrial motions, trial, and appeal. During the investigation phase, evidence is gathered and witnesses are interviewed. The complaint or petition is then filed with the court to initiate legal proceedings. Discovery allows both parties to obtain evidence from each other through methods such as depositions and requests for documents. Pretrial motions can address procedural issues or legal arguments before the trial begins. The trial is where evidence is presented, witnesses testify, and a judge or jury makes a decision. If either party is dissatisfied with the outcome, they can appeal the decision to a higher court.",
    createdOn: "2024-03-16T12:00:00.000Z",
  },
  {
    id: 7,
    title: "What is the role of a lawyer in the legal system?",
    description:
      "Lawyers play a crucial role in the legal system by representing clients in legal matters and advocating on their behalf. They provide legal advice, draft legal documents such as contracts and wills, and represent clients in court proceedings. Lawyers also negotiate settlements and handle administrative tasks related to legal matters. Additionally, lawyers may specialize in specific areas of law, such as criminal law, family law, or corporate law, depending on their expertise and interests.",
    createdOn: "2024-03-16T13:00:00.000Z",
  },
  {
    id: 8,
    title: "What are some examples of landmark Supreme Court cases?",
    description:
      "Landmark Supreme Court cases have had a significant impact on American society and jurisprudence. Examples include Marbury v. Madison, which established the principle of judicial review, Brown v. Board of Education, which declared segregation in public schools unconstitutional, Roe v. Wade, which legalized abortion, and Obergefell v. Hodges, which legalized same-sex marriage nationwide. These cases have shaped the interpretation of the Constitution and influenced the course of American history.",
    createdOn: "2024-03-16T14:00:00.000Z",
  },
  {
    id: 9,
    title: "How does international law work?",
    description:
      "International law governs relations between sovereign states and international organizations. It is based on treaties, agreements, and customary practices accepted by the international community. International law covers a wide range of topics, including diplomacy, trade, human rights, and the environment. Enforcement of international law can be challenging, as there is no central authority to ensure compliance. However, states may voluntarily adhere to international norms and agreements to maintain peace and stability.",
    createdOn: "2024-03-16T15:00:00.000Z",
  },
  {
    id: 10,
    title: "What is the role of the judiciary in a democratic society?",
    description:
      "The judiciary plays a vital role in upholding the rule of law and ensuring justice in a democratic society. It interprets and applies the law, resolves disputes between individuals and the state, and safeguards fundamental rights and freedoms. The judiciary acts as a check on the power of the executive and legislative branches, ensuring that their actions are consistent with the Constitution and the principles of democracy. Judges are expected to be impartial and independent, making decisions based on the law and legal precedent rather than personal or political considerations.",
    createdOn: "2024-03-16T16:00:00.000Z",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") || 10;

  const trimmedData = data.slice(0, Number(limit));

  return NextResponse.json({
    message: "Success",
    data: trimmedData,
  });
}
