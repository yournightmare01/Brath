import Clock from '../../atoms/icons/clock/Clock';

const WorkTime = () => {
  return (
    <section className='work-time'>
      <div className='work-time__container fluid fluid--large'>
        <p className='work-time__text1'>
          <span className='work-time__text1--openTime'>
            <Clock className='clock-icon' /> Opentime:
          </span>
          <span className='text-light'>
            Di. - Fr.: 07:00-13:00 und 15:00-18:30.
          </span>
        </p>
        <p className='work-time__text2 text-light'>Sa.: 07:30 - 12:30</p>
      </div>
    </section>
  );
};
export default WorkTime;
