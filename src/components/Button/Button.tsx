interface Button {
  text: string
  isLoading?: boolean
  className?: string
  type?: 'button' | "submit"
}

export const Button = ({text, isLoading, className, type = 'button'}: Button) => {
  return (
    <button className={`button ${className}`}>
      {isLoading && <div className='button_loading'></div>}

      <span style={{opacity: `${isLoading ? 0 : 1}`}}>{text}</span>
    </button>
  )
}