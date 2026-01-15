import Part from './Part'

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {


  return (
    <div>
      <p>
        < Part part={part1} exercises={exercises1} />
        < Part part={part2} exercises={exercises2} />
        < Part part={part3} exercises={exercises3} />
      </p>
    </div>
  )
}

export default Content