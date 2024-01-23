type ISkill = {
  skill: string;
};

export default function Skill({ skill }: ISkill) {
  return <div className="rounded-full px-3 py-2 bg-lime-300">#{skill}</div>;
}
