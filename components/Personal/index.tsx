type PersonalInformationItem = {
  type: string;
  value: string;
};

type PersonalProps = {
  personalInformation: PersonalInformationItem[];
};

export default function Personal({ personalInformation }: PersonalProps) {
  return (
    <div>
      <h2 className="font-display text-xl text-maroon mb-4">Personal</h2>
      <div className="space-y-3">
        {personalInformation.map((info) => (
          <div key={info.type}>
            <p className="text-xs uppercase tracking-wider text-text-secondary font-medium">
              {info.type}
            </p>
            <p className="text-sm text-text mt-0.5">{info.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
