import logoIgnite from '../assets/Logo.svg'

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <img src={logoIgnite} alt="" />
    </header>
  )
}
