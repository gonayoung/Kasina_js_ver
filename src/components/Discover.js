import React from 'react';
import '../css/Discover.css';

const Discover = () => {
    return (
        <div className="dis_outer">
            <h3>DISCOVER</h3>
            <div className='dis_wrap'>
                <div className='dis_1'>
                    <img src= {process.env.PUBLIC_URL +'/img/25.png'} />
                    <strong>RUN & PERFORMANCE</strong>
                    <p>활력이 넘치는 5월, 움직임과 퍼포먼스가 절정에 이르는 순간. RUN & PERFORM은 러닝을 넘어 다양한 퍼포먼스를 지원하는 경량 의류, 안정적인 러닝화, 그리고 섬세하게 설계된 액세서리를 제안합니다. 초보 러너부터 퍼포먼스를 추구하는 이들까지, 움직임을 완성하는 셀렉션을 지금 만나보세요.</p>
                    <span>MORE</span>
                </div>
                <div className='dis_1'>
                    <img src= {process.env.PUBLIC_URL +'/img/26.png'} />
                    <strong>COLLAB DROPS</strong>
                    <p>하나의 만남이 만들어내는 특별한 가치. COLLAB DROPS는 브랜드 간 시너지를 담아낸 협업 컬렉션을 엄선해 선보입니다. 감각적 디자인과 실험적 접근, 그리고 한정 수량으로 더욱 빛나는 아이템들, 트렌드를 넘어 시대를 이끄는 독창적인 콜라보레이션을 이곳에서 만나보세요. 소장가치와 스타일, 그 모두를 완성하는 단 하나의 기회를 제안합니다.</p>
                    <span>MORE</span>
                </div>
                <div className='dis_1'>
                    <img src= {process.env.PUBLIC_URL +'/img/27.png'} />
                    <strong>OUTDOOR READY</strong>
                    <p>캠핑, 트래킹, 하이킹은 물론, 일상에서도 자연스럽게 스며드는 아웃도어 스타일. OUTDOOR READY는 활동성을 높이는 디테일, 변화하는 날씨에 대응하는 소재, 도시와 자연을 넘나드는 세련된 무드를 갖춘 아이템을 제안합니다. 지금, 아웃도어를 준비할 가장 완성도 높은 순간을 만나보세요.</p>
                    <span>MORE</span>
                </div>
            </div>
        </div>
    );
};

export default Discover;