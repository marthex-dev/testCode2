export default function HostingPlanCard({ plan }) {
  const SpecItem = ({ icon, title, detail }) => (
    <div className="flex items-start space-x-3 mb-4">
      <div className="w-5 h-5 mt-0.5">
        {icon}
      </div>
      <div>
        <div className="text-white text-sm font-medium">{title}</div>
        {detail && <div className="text-gray-400 text-xs">{detail}</div>}
      </div>
    </div>
  )

  return (
    <div 
      className={`bg-[#232323] rounded-lg overflow-hidden relative ${
        plan.recommended ? 'ring-2' : ''
      }`}
      style={{ borderColor: plan.color }}
    >
      {/* Header */}
      <div 
        className="p-6 border-b border-[#2c2c2c]"
        style={{ borderColor: plan.color }}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">
            {plan.name}
          </h3>
          <div className="text-right">
            <div className="text-gray-400 line-through text-sm">
              {plan.originalPrice}₺ yerine
            </div>
            <div className="text-2xl font-bold" style={{ color: plan.color }}>
              {plan.price}₺<span className="text-sm text-gray-400">/ay</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className="p-6">
        <SpecItem
          icon={<CpuIcon color={plan.color} />}
          title={plan.specs.cpu}
          detail={plan.specs.cpuDetail}
        />
        <SpecItem
          icon={<RamIcon color={plan.color} />}
          title={plan.specs.ram}
          detail={plan.specs.ramType}
        />
        <SpecItem
          icon={<StorageIcon color={plan.color} />}
          title={plan.specs.storage}
          detail={plan.specs.storageType}
        />
        <SpecItem
          icon={<NetworkIcon color={plan.color} />}
          title={plan.specs.traffic}
          detail={plan.specs.trafficDetail}
        />
        <SpecItem
          icon={<UptimeIcon color={plan.color} />}
          title={plan.specs.uptime}
          detail={plan.specs.uptimeDetail}
        />
        <SpecItem
          icon={<OsIcon color={plan.color} />}
          title={plan.specs.os}
          detail={plan.specs.osDetail}
        />
        <SpecItem
          icon={<UsersIcon color={plan.color} />}
          title={`${plan.specs.servers}`}
          detail={`${plan.specs.users} - ${plan.specs.userDetail}`}
        />
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-[#2c2c2c]">
        <button
          className="w-full py-2.5 rounded-lg font-medium text-white transition-all duration-300"
          style={{ 
            backgroundColor: plan.color,
            ':hover': { filter: 'brightness(110%)' }
          }}
        >
          SATIN AL
        </button>
      </div>
    </div>
  )
}

// Icons
const CpuIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M4 4h16v16H4z" />
    <path d="M9 9h6v6H9z" />
    <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
  </svg>
)

const RamIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M2 8h20v8H2z" />
    <path d="M6 8v8M10 8v8M14 8v8M18 8v8" />
  </svg>
)

const StorageIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20M2 12h20" />
  </svg>
)

const NetworkIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M4 4h16M4 8h16M4 12h16M4 16h16M4 20h16" />
  </svg>
)

const UptimeIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 4" />
  </svg>
)

const OsIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h8" />
  </svg>
)

const UsersIcon = ({ color }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-8 8-8s8 4 8 8" />
  </svg>
) 