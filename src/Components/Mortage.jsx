import style from "./Mortage.module.css";
import cal from '../assets/images/icon-calculator.svg'

export const Mortage = ({
  amount,
  rate,
  term,
  onChangeAmount,
  onChangeRate,
  onChangeTerm,
  onClickClear,
}) => {
  return (
    <div className={style.mortagecont}>
      <div className={style.mortageleft}>
        <div className={style.head}>
          <h2>Morgage Calculator</h2>
          <a onClick={onClickClear} href="">
            Clear All
          </a>
        </div>

        <div className={style.form}>
          <form action="">
            <div className={style.inputdetails}>
              <label htmlFor="">Mortage Amount</label>
              <input type="text" value={amount} onChange={onChangeAmount} />
            </div>

            <div className={style.details}>
              <div className={style.termrate}>
                <label htmlFor="">Mortage Term</label>
                <input type="text" value={term} onChange={onChangeTerm} />
                <span>years</span>
              </div>

              <div className={style.termrate}>
                <label htmlFor="">Interest rate</label>
                <input type="text" value={rate} onChange={onChangeRate} />
                <span>%</span>
              </div>
            </div>

            <div className={style.radio}>
                <label className={style.mort} htmlFor="">Mortgage Type</label>
                <div className={style.type}>
                    <input type="radio" id="" />
                    <label htmlFor="">Repayment</label>
                </div>

                <div className={style.type}>
                    <input type="radio" id="" />
                    <label htmlFor="">Interest Only</label>
                </div>
            </div>
          <button className={style.btn} type='click'><img src={cal} alt="" />Calculate Repayments</button>
          </form>

        </div>
      </div>

      <div className={style.mortageright}>
        <div className={style.righttop}>
            <h1>Your Result</h1>
            <p>
                Your results are shon below based on the information you provided.
                To adjust the results, edit the form and click &#xFF02; Calculate Repayment &#xFF02; again.
            </p>
        </div>

        <div className={style.rightbottom}>
            <div className={style.monthlyrepay}>
            <h3>Your Monthly Repayments</h3>
            <p>$ 1,797.74</p>
            </div>

            <div className={style.totalrepay}>
                <h3>Total you&#x2019;ll repay over the term </h3>
                <p>$ 539,322.94</p>
            </div>

        </div>
      </div>
    </div>
  );
};
